import './TaskFilter.css'

type Filter = 'all' | 'pending' | 'completed';
interface TaskFilterProps {
    currentFilter: Filter;
    onChangeFilter: (filter: Filter) => void

}

const TaskFilter = ({ onChangeFilter, currentFilter }: TaskFilterProps) => {
    console.log('currentFilter', currentFilter)
    return (
        <div className="taskFilter">
            <button className={` taskFilter-button ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => onChangeFilter('all')}>All</button>
            <button className={` taskFilter-button ${currentFilter === 'pending' ? 'active' : ''}`} onClick={() => onChangeFilter('pending')}>Pending</button>
            <button className={` taskFilter-button ${currentFilter === 'completed' ? 'active' : ''}`} onClick={() => onChangeFilter('completed')}>Completed</button>
        </div>
    )
}

export default TaskFilter;