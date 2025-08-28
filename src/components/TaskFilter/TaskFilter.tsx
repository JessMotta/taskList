import './TaskFilter.css'
interface TaskFilterProps {
    //currentFilter: 'all' | 'pending' | 'completed'
    onChangeFilter: (filter: 'all' | 'pending' | 'completed') => void

}

const TaskFilter = ({ onChangeFilter }: TaskFilterProps) => {

    return (
        <div className="taskFilter-container">
            <button onClick={() => onChangeFilter('all')}>Todas</button>
            <button onClick={() => onChangeFilter('pending')}>Pendentes</button>
            <button onClick={() => onChangeFilter('completed')}>Concluídas</button>
        </div>
    )
}

export default TaskFilter;