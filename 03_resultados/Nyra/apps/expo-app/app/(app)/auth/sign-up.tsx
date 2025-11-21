import { Link } from 'expo-router';

import {
  AuthPageLayout,
  AuthPageLayoutDescription,
  AuthPageLayoutForm,
  AuthPageLayoutHeading,
  AuthPageLayoutLogo,
  AuthPageLayoutSecondaryButton,
  SignUpForm,
} from '@kit/auth';
import { Button, Text } from '@kit/ui';

import { LogoImage } from '../../../components/logo';

export default function SignUpPage() {
  return (
    <AuthPageLayout>
      <AuthPageLayoutLogo>
        <LogoImage />
      </AuthPageLayoutLogo>

      <AuthPageLayoutHeading>Comencemos.</AuthPageLayoutHeading>

      <AuthPageLayoutDescription>
        Regístrate para crear tu cuenta.
      </AuthPageLayoutDescription>

      <AuthPageLayoutForm>
        <SignUpForm />
      </AuthPageLayoutForm>

      <AuthPageLayoutSecondaryButton>
        <Button variant={'link'} asChild>
          <Link className={'text-center'} href="/auth/sign-in">
            <Text>¿Ya tienes una cuenta? Inicia sesión.</Text>
          </Link>
        </Button>
      </AuthPageLayoutSecondaryButton>
    </AuthPageLayout>
  );
}
