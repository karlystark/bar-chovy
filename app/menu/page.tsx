import MenuCard from "../components/MenuCard/MenuCard";

export default function Menu (){

    const menu = [
        {
            images:["/cheeseplate.png", ],
            alt: ["cheese plate"],
            text: ["cheese board magic", "cheeses, meats, olives", "gluten-free options"]
        },
        {
            images:["/salad.png"],
            alt: ["salad"],
            text: ["fresh salad", "various nutrients, fruits, veg, flowers", "vegan, gluten-free"]
        },
        {
            images:["/pasta.png",],
            alt: ["pasta"],
            text: ["family pasta", "tomato, anchovy, fresh herbs", "pescatarian, dairy-free"]
        },
        {
            images:["/cake.png",],
            alt: ["cake"],
            text: ["orange cake", "orange, powdered sugar", "none"]
        },

    ]

    return (
        <>
            <p className="bg-[#5d7633] text-[#c7b29f] self-start py-2 px-3 inline-block flex justify-center mt-8 album-title"> Menu 02.02.2024</p>
        <div className="flex flex-wrap justify-center Menu">
            {
                menu.map((item, idx) => <MenuCard data={item} key={idx}/>)
            }
        </div>
        </>

    );
}