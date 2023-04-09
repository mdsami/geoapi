"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
require("dotenv/config");
async function bootstrap() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableVersioning({ type: common_1.VersioningType.URI });
    app.enableCors();
    const swaggerCconfig = new swagger_1.DocumentBuilder()
        .setTitle('Geoapi BD API')
        .setDescription('This api will help clients to store their data.')
        .setVersion('1.0')
        .addTag('geoapi')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerCconfig);
    swagger_1.SwaggerModule.setup('docs', app, swaggerDocument);
    await app.listen(process.env.PORT);
    common_1.Logger.debug(`Application is running on: http://0.0.0.0:${process.env.PORT}`);
    common_1.Logger.debug(`Swagger is running on: http://0.0.0.0:${process.env.PORT}/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map