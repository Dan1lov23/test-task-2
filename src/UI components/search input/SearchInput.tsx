import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {useStore} from "../../store/store/store.ts";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import {useNavigate} from 'react-router-dom';

import {useState, useEffect} from "react";

export default function SearchInput() {

    const navigate = useNavigate();

    const {catalog, setProductForTemplate} = useStore();

    const [allProductsArray, setAllProductsArray] = useState<string[]>([]);

    useEffect(() => {
      const allProducts = [];
      for (let a= 0; a < catalog.length; a++) {
          allProducts.push(catalog[a].name);
      }
      setAllProductsArray(allProducts);

    }, [catalog])

    const findProductFunction = () => {
        const itemForFind = document.getElementById("productForFind") as HTMLInputElement;
        for (let a = 0; a < catalog.length; a++) {
            if (itemForFind.value == catalog[a].name) {
                setProductForTemplate(catalog[a]);
                navigate(`/product${catalog[a].id}`)
            }
        }
    }

    return (
        <div style={{display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(2, max-content)'}}>
            <Autocomplete
                disablePortal
                options={allProductsArray}
                sx={{ width: 300 }}
                id="productForFind"
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <button style={{width: '50px', height: '55px', marginLeft: "10px"}} onClick={() => findProductFunction()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}
