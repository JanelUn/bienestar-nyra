import { Link } from 'expo-router';

import {
  AuthPageLayout,
  AuthPageLayoutDescription,
  AuthPageLayoutForm,
  AuthPageLayoutHeading,
  AuthPageLayoutLogo,
  AuthPageLayoutSecondaryButton,
  EmailPasswordResetForm,
} from '@kit/auth';
import { Button, Text } from '@kit/ui';

import { LogoImage } from '../../../components/logo';

export default function PasswordResetPage() {
  return (
    <AuthPageLayout>
      <AuthPageLayoutLogo>
        <LogoImage />
      </AuthPageLayoutLogo>

      <AuthPageLayoutHeading>Hola,</AuthPageLayoutHeading>

      <AuthPageLayoutDescription>
        Vamos a recuperar tu contraseña.
      </AuthPageLayoutDescription>

      <AuthPageLayoutForm>
        <EmailPasswordResetForm />
      </AuthPageLayoutForm>

      <AuthPageLayoutSecondaryButton>
        <Button variant={'link'} asChild>
          <Link className={'text-center'} href="/auth/sign-in">
            <Text>¿Contraseña recuperada? Inicia sesión.</Text>
          </Link>
        </Button>
      </AuthPageLayoutSecondaryButton>
    </AuthPageLayout>
  );
}
