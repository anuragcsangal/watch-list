'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"


export async function addWatch(formData: FormData) {
  const model = formData.get('model')
  const brand = formData.get('brand')
  const referenceNumber = formData.get('reference_number')

  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data: { session } } = await supabase.auth.getSession()
  const user = session?.user

  if (!user) {
    console.error('User is not authenticated within addWatch server action')
    return
  }

  const { data, error } = await supabase.from('watches').insert([
    {
      model,
      brand,
      referece_number: referenceNumber,
      user_id: user.id
    }
  ])

  if (error) {
    console.error('Error inserting data', error)
    error
  }

  revalidatePath('/watch-list')

  return { message: 'success' }
}
