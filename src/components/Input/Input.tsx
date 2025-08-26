const Input = ({ id}: { id: string}) => {
    return (
        <input type="text" placeholder="Adicionar nova tarefa" id={id}/>
    )
}

export default Input;