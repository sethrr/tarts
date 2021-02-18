import { ItemsGrid, ItemStyles } from "../styles/Grids";

import React from 'react';


export default function LoadingGrid({ count }) {
    return <ItemsGrid>
        {Array.from({length: count}, (_, i) => (
            <ItemStyles>
                <p className="mark">Loading...</p>
                <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
                      className="loading" alt="loading" width="500" height="400" />
            </ItemStyles>
        ))}
    </ItemsGrid>
}