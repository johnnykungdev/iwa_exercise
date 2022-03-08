import DualSlider from "./component/dualSlider";

const app = () => {
    return (
        <>
            <DualSlider 
            min={0}
            max={75}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
        </>
    )
}

export default app;