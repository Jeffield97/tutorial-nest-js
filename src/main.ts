import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as swStats from 'swagger-stats';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(
    swStats.getMiddleware({
      name: 'api-catalog',
      authentication: true,
      onAuthenticate: function (req, username, password) {
        // simple check for username and password
        return username === 'admin' && password === 'secret';
      },
      elasticsearch: 'http://myelastic.com:9200',
      elasticsearchUsername: 'admin',
      elasticsearchPassword: 'secret',
      elasticsearchIndexPrefix: 'book-catalog-'

    }),
  );

  // Configurar títulos de documnentación
  const options = new DocumentBuilder()
    .setTitle('Sample REST API')
    .setDescription('Sample API REST description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document);
  // await RedocModule.setup('/docs', app, document, redocOptions);
  await app.listen(3000);
}
bootstrap();
