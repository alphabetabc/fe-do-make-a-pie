import { useParams } from "react-router-dom";

const DemoPage = () => {
    const params = useParams();
    console.log(params);

    return <span>demo</span>;
};

export default DemoPage;
