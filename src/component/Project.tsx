
interface ProjectProps {
    title: string;
}

function Project({title}: ProjectProps ) {

    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

export default Project;