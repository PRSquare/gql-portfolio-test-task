import { Module } from '@nestjs/common';
import { GraphQLModule, GraphQLISODateTime } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { ProfileResolver } from '../interface/profile.resolver.js';
import { ProfileRepository } from '../infra/profile.repository.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/api/graphql',
      graphiql: true,
      typePaths: ['./src/infra/queries/*.graphql'],
      definitions: {
        path: './src/infra/generated/graphql.ts',
      },
      resolvers: {
        Date: GraphQLISODateTime,
      },
    }),
  ],
  providers: [ProfileResolver, ProfileRepository],
})
export class AppModule {}
