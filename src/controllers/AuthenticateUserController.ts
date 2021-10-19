import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handler(request: Request, response: Response) {
    const service = new AuthenticateUserService()
    const { code } = request.body

    const result = await service.execute(code)

    return response.json(result)
  }
}

export { AuthenticateUserController }