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
        extend: false,
        className: {
          container: "flex flex-col gap-5",
          button: "bg-black text-zinc-300 rounded-lg",
          input: "bg-black p-2 border-gray-600 text-white rounded-lg w-full",
          label: "block my-1 text-white",
        }
      }}
    />

  )
}

export default AuthForm
