import { Link } from 'expo-router';

import {
  AuthPageLayout,
  AuthPageLayoutDescription,
  AuthPageLayoutForm,
  AuthPageLayoutHeading,
  AuthPageLayoutLogo,
  AuthPageLayoutSecondaryButton,
  SignInForm,
} from '@kit/auth';
import { Button, Text } from '@kit/ui';

import { LogoImage } from '../../../components/logo';

export default function SignInPage() {
  return (
    <AuthPageLayout>
      <AuthPageLayoutLogo>
        <LogoImage />
      </AuthPageLayoutLogo>

      <AuthPageLayoutHeading>Bienvenido de vuelta.</AuthPageLayoutHeading>

      <AuthPageLayoutDescription>
        Vamos a iniciar sesión.
      </AuthPageLayoutDescription>

      <AuthPageLayoutForm>
        <SignInForm />
      </AuthPageLayoutForm>

      <AuthPageLayoutSecondaryButton>
        <Button variant={'link'} asChild>
          <Link className={'text-center'} href="/auth/sign-up">
            <Text>Crear una cuenta</Text>
          </Link>
        </Button>
      </AuthPageLayoutSecondaryButton>
    </AuthPageLayout>
  );
}
