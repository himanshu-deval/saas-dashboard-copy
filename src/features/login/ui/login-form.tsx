import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { useLogin } from '../model/use-login';
import { ApiError } from '@/shared/types';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    login(values, {
      onSuccess: (data: { token: string }) => {
        // In a real app, you'd get a token and user data
        localStorage.setItem('auth_token', data.token);
        navigate('/');
      },
      onError: (error: ApiError) => {
        toast.error(error.message || 'An unexpected error occurred.');
      },
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Input
          {...form.register('email')}
          placeholder="name@example.com"
          autoComplete="email"
        />
        {form.formState.errors.email && (
          <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Input
          {...form.register('password')}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        {form.formState.errors.password && (
          <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
