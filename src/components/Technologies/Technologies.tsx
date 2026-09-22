import { use } from "react";
import type { ITechnology } from "../../Type/technologyType";

interface technologiesProps {
    technologiesPromise : Promise<ITechnology[]>;
}
const Technologies = ({ technologiesPromise } : technologiesProps) => {
    const technologies = use(technologiesPromise);
    console.log(technologies);
    
    return (
        <div>

        </div>
    );
};

export default Technologies;