"use client"

import { Auth } from "@supabase/auth-ui-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type Props = {}

const AuthForm = (props: Props) => {
  const supabase = createClientComponentClient();

  const callbackUrl = "https://watch-list-rust.vercel.app"
  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      showLinks={false}
      providers={[]}
      redirectTo={`${callbackUrl}/auth/callback`}
      appearance={{
        className: {
          button: "bg-white-400 text-gray-900",
          input: "bg-gray-700 border-gray-600 text-white",
        }
      }}
    />

  )
}

export default AuthForm
