import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthResolver } from './auth.resolver';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    controllers: [],
    providers: [
        AuthService,
        JwtStrategy,
        AuthResolver
    ],
    exports: [
        AuthService
    ]
})
export class AuthModule { }
