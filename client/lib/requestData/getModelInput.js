import model from "./input_model.json";
import mapping from "./variable_lookup.json";

const getBinaryInput = (combinedData) => {
    for (const [key, value] of Object.entries(mapping)) {
        model[value] = parseInt(combinedData[key]);
    }
    return model;
}

export default getBinaryInput;