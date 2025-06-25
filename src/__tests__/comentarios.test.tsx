import { render, screen, fireEvent } from '@testing-library/react'
import PostComment from '../components/PostComments'

describe('Teste de comentários', () => {
    it('deve adicionar dois comentários na lista', () => {
        render(<PostComment />)

        const input = screen.getByTestId('input-comentario')
        const botao = screen.getByTestId('botao-enviar')

        fireEvent.change(input, { target: { value: 'Comentário 1' } })
        fireEvent.click(botao)

        fireEvent.change(input, { target: { value: 'Comentário 2' } })
        fireEvent.click(botao)

        expect(screen.getByText('Comentário 1')).toBeInTheDocument()
        expect(screen.getByText('Comentário 2')).toBeInTheDocument()
    })
})

