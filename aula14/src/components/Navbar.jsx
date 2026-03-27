export default function NavBar(props){
    return (
        <>
        <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <h1 className="text-lg font-bold">
                {props.titulo}
            </h1>

            <div className="flex gap-4">
                <a href="#">{props.link1}</a>
                <a href="#">{props.link2}</a>
                <a href="#">{props.link3}</a>
            </div>
        </nav>
        </>
    )
}