import MenuCard from "../components/MenuCard/MenuCard";

export default function Menu (){

    const menu = [
        {
            images:["/cheeseplate.png", ],
            alt: ["cheese plate"],
            text: ["cheese plate", "the works"]
        },
        {
            images:["/salad.png"],
            alt: ["salad"],
            text: ["big salad", "greens, etc."]
        },
        {
            images:["/pasta.png",],
            alt: ["pasta"],
            text: ["pasta", "chovy special"]
        },
        {
            images:["/cake.png",],
            alt: ["cake"],
            text: ["some cake", "tbd"]
        },

    ]

    return (
        <div className="Menu flex flex-wrap justify-center">
            {
                menu.map((item, idx) => <MenuCard data={item} key={idx}/>)
            }

        </div>

    );
}