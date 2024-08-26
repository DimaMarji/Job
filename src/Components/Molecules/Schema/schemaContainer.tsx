import React from 'react';
import NextHead from 'next/head';
import {ISchemaProps} from "./interface";

const Schema: React.FC<ISchemaProps> = ({schemaData}) => (
    <NextHead>
        <script type="application/ld+json">
            {`
      ${schemaData}
      `}
        </script>
    </NextHead>
);

export default Schema;