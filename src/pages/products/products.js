import React from 'react';
import './products.scss';


import { Map, List, fromJS } from 'immutable';
import DataGrid, {
  Editing,
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup,
  MasterDetail
} from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
import { useGetProductsByVersionIdQuery, useUpdateProductMutation, useDeleteProductMutation, useCreateProductMutation, useGetProductsByCatalogIdQuery } from '../../api/queries.generated';
import Form from 'devextreme-react/form';



export default () => {
  const { data, loading, error } = useGetProductsByCatalogIdQuery({
    variables: {
      id: 2385
    },
  });



  const [updateProductMutation] = useUpdateProductMutation();
  const [deleteProductMutation] = useDeleteProductMutation();
  const [createProductMutation] = useCreateProductMutation();

  if (loading || error) return '';

  function getProducts() {
    return new DataSource({
      store: new ArrayStore({
        data: JSON.parse(JSON.stringify(data.catalog.products)),
        key: 'oid'
      }),
    });
  }
  const updateObject = (e) => {
    console.log(e)
    updateProductMutation({
      variables: {
        product: { ...e.newData },
        oid: e.oldData.oid
      }
    });
    e.cancel = true;
  };
  const deleteObject = ({ key }) => {
    //console.log(key);
    deleteProductMutation({
      variables: {
        oid: key.oid
      }
    });
  };

  var dStore = getProducts();


  return (
    <React.Fragment>
      <h2 className={'content-block'}>Products</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <DataGrid
            className={'dx-card wide-card'}
            key={'oid'}
            dataSource={JSON.parse(JSON.stringify(data.catalog.products))}
            showBorders={false}
            focusedRowEnabled={true}
            defaultFocusedRowIndex={0}
            columnAutoWidth={true}
            columnHidingEnabled={true}
            cacheEnabled={false}
            onRowUpdating={updateObject}
            onRowRemoving={deleteObject}
          >
            <Editing
              allowUpdating={true}
              // allowAdding={true}
              allowDeleting={true}
              mode="popup" /> {/* 'batch' | 'cell' | 'form' | 'popup' */}
            <Paging defaultPageSize={10} />
            <Pager showPageSizeSelector={true} showInfo={true} />
            <FilterRow visible={true} />
            <MasterDetail enabled={true} component={subCategories} />
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );


  function subCategories(props) {

    console.log(props);
    return (
      <Form
        dataSource={props.data.data.options}
      />
    )
  }



}