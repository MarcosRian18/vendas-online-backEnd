import { createParamDecorator } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
import { authorizationToLoginPayload } from "src/utils/base-64-converter";

export const UserId = createParamDecorator(
    (_, ctx: ExecutionContextHost) => {
        const {authorization} = ctx.switchToHttp().getRequest().headers
        const loginPayload = authorizationToLoginPayload(authorization)
        
        console.log('authorization', authorization)
        return loginPayload?.id
    }
)