import { Task } from './Task';

type Props = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
}

export const ListaDeTareas = ({ listaTareas, borrarTarea }: Props) => {
    return (
        <div className='taskList'>
            {listaTareas.map((task, index) => (
                <Task 
                    key={index} 
                    task={task} 
                    deleteTask={() => borrarTarea(index)} 
                />
            ))}
        </div>
    );
}
