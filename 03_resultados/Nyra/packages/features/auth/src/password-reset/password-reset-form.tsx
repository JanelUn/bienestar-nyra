import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { useRequestResetPassword } from '@kit/supabase';
import { Button, Input, Text, toast } from '@kit/ui';

import { EmailSchema } from '../lib/schema';

export function EmailPasswordResetForm() {
  const form = useForm({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: '',
    },
  });

  const passwordResetMutation = useRequestResetPassword();

  return (
    <View className={'flex-col justify-center gap-8 p-8'}>
      <View className={'h-16'}>
        <Text>Correo electrónico</Text>

        <Controller
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <Input
              inputMode={'email'}
              placeholder="Correo electrónico"
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
      </View>

      <View>
        <Button
          className={'w-full'}
          onPress={form.handleSubmit((data) => {
            passwordResetMutation.mutate({
              email: data.email,
              redirectTo: '/',
            });

            toast.success('Te enviamos un correo electrónico para restablecer tu contraseña.');
          })}
        >
          <Text>Solicitar restablecimiento de contraseña</Text>
        </Button>
      </View>
    </View>
  );
}
