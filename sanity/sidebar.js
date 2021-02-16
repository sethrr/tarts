import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function Sidebar() {
    return S.list().title('The Toasted Tart').items([
        S.listItem().title('Home Page').icon(() =><strong>🥟</strong>)
        .child(
            S.editor().schemaType('storeSettings')
            .documentId('Home')
        ),
        ...S.documentTypeListItems().filter(item => item.getId() !== 'storeSettings'),
    ])
}