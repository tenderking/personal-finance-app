import { z } from 'zod';

const authValidationSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters').min(1, 'Password is required'),
  name: z.string().min(1, 'Name is required').optional(),
});

export default authValidationSchema;
