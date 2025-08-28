import './TaskFilter.css'

type Filter = 'all' | 'pending' | 'completed';
interface TaskFilterProps {
    currentFilter: Filter;
    onChangeFilter: (filter: Filter) => void

}

const TaskFilter = ({ onChangeFilter, currentFilter }: TaskFilterProps) => {
    console.log('currentFilter', currentFilter)
    return (
        <div className="taskFilter-container">
            <button className={currentFilter === 'all' ? 'active' : ''} onClick={() => onChangeFilter('all')}>Todas</button>
            <button className={currentFilter === 'pending' ? 'active' : ''} onClick={() => onChangeFilter('pending')}>Pendentes</button>
            <button className={currentFilter === 'completed' ? 'active' : ''} onClick={() => onChangeFilter('completed')}>Concluídas</button>
        </div>
    )
}

export default TaskFilter;