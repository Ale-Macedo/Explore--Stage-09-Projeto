import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New(){
  return(
    <Container>
      <Header/>
      
      <main>
        <Form>
          <header>
          <h1>Criar nota</h1>

          <a href="/">Voltar</a>
          </header>

          <Input 
          placeholder="titulo"
          type="text"
          />

          <Textarea 
          placeholder="Observações"
          type="textarea"
          />

          <Section title="Links úteis">

            <NoteItem value="https://app.rocketseat.com.br/me/alessandro-macedo" />
            <NoteItem isNew placeholder ="Novo link" />

          </Section>

          <Section title="Marcadores">
            <div className='tags'>

              <NoteItem value="react" />
              <NoteItem isNew placeholder ="Nova tag" />

            </div>
          </Section>

          <Button title="Salvar"/>

        </Form>
      </main>
    </Container>
  )
}