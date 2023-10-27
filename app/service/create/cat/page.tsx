import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import BackButton from '@/components/BackButton'
import NavBar from '@/components/NavBar'
import { Database } from '@/supabase'
import SelectCat from './SelectCat'

export default async function SelectCategory() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data,
  } = await supabase.from("clientes").select("cliente_id, nome, sobrenome, email")

  return (
    <div className="w-full flex flex-col items-center">
      <NavBar session={session}/>
        Selecione a categoria do serviço
        <BackButton />

        <SelectCat />

    </div>
  )
}
