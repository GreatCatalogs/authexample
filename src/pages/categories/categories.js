import React from "react";
import "./categories.scss";
import { v4 as uuidv4 } from "uuid";
import DataGrid, {
  Editing,
  Column,
  Pager,
  Paging,
  FilterRow,
} from "devextreme-react/data-grid";
import {
  useUpdateCategoryMutation as updateQuery,
  useDeleteCategoryMutation as deleteQuery,
  useCreateCategoryMutation as createQuery,
  useCategoriesByCatalogIdQuery as getQuery,
} from "../../api/queries.generated";
import CustomStore from "devextreme/data/custom_store";

export default () => {
  const { data, loading, error, refetch } = getQuery({
    variables: {
      id: 2385,
    },
  });

  const [updateObject] = updateQuery();
  const [deleteObject] = deleteQuery();
  const [createObject] = createQuery();
  const listColumns = ["title", "brand", "expired"];
  if (loading || error) return "";

  const customDataSource = new CustomStore({
    key: "oid",
    load: () => {
      return data.catalog.products;
    },
    insert: (values) => {
      createObject({
        variables: {
          product: { ...values, catalog: data.catalog.oid, oid: uuidv4() },
        },
      }).then((xx) => refetch());
    },
    update: (key, values) => {
      updateObject({
        variables: {
          product: { ...values },
          oid: key,
        },
      });
    },
    remove: (key) => {
      deleteObject({
        variables: {f
          oid: key,
        },
      }).then((xx) => refetch());
    },
  });

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Products</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <DataGrid
            className={"dx-card wide-card"}
            dataSource={customDataSource}
            showBorders={false}
            focusedRowEnabled={true}
            defaultFocusedRowIndex={0}
            columnAutoWidth={true}
            columnHidingEnabled={true}
            cacheEnabled={false}
          >
            <Editing
              allowUpdating={true}
              allowAdding={true}
              allowDeleting={true}
              mode="popup"
            />
            {listColumns.map((xx) => (
              <Column key={xx} dataField={xx} />
            ))}
            {/* 'batch' | 'cell' | 'form' | 'popup' */}
            <Paging defaultPageSize={10} />
            <Pager showPageSizeSelector={true} showInfo={true} />
            <FilterRow visible={true} />
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
};
