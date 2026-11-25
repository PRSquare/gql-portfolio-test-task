import { Module } from '@nestjs/common';
import { GraphQLModule, GraphQLISODateTime } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service.js';
import { AppResolver } from './app.resolver.js';
import { ProfileRepository } from './profile.repository.js'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      typePaths: ['./src/queries/*.graphql'],
      definitions: {
	path: './src/generated/graphql.ts',
      },
      resolvers: {
	Date: GraphQLISODateTime
      }
    }),
  ],
  providers: [AppService, AppResolver, ProfileRepository],
})

export class AppModule {}
