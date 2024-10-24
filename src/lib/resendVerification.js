import { createClient } from '@/utils/supabase/client'; // Adjust depending on your setup



const resendVerification = async (email) => {
  const { error } = await createClient.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://your-app-url.com/auth-confirmation', // Redirect after confirmation
  });

  if (error) {
    console.error('Error resending verification email:', error.message);
  } else {
    console.log('Verification email resent to:', email);
  }
};

export default resendVerification;
