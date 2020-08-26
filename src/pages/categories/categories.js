import React, { useEffect } from 'react';
import './categories.scss';
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
import { useGetCategoriesByVersionIdQuery, useUpdateCategoryMutation } from '../../api/queries.generated';
import CustomStore from "devextreme/data/custom_store";


export default () => {
  const { data, loading, error } = useGetCategoriesByVersionIdQuery({
    variables: {
      id: 100018
    },
  });



  const [updateCategoryMutation] = useUpdateCategoryMutation();

  if (loading || error) return '';

  const updateData = (e) => {
    updateCategoryMutation({
      variables: {
        category: { ...e.newData },
        oid: e.oldData.oid
      }
    });

  }


  var gdata = JSON.parse(JSON.stringify(data.version.catalog.categories));




  return (
    <React.Fragment>
      <h2 className={'content-block'}>Categories</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <DataGrid
            className={'dx-card wide-card'}
            key={'oid'}
            dataSource={gdata}
            showBorders={false}
            focusedRowEnabled={true}
            defaultFocusedRowIndex={0}
            columnAutoWidth={true}
            columnHidingEnabled={true}
            cacheEnabled={false}
            onRowUpdating={updateData}
          >
            <Editing
              allowUpdating={true}
              // allowAdding={true}
              // allowDeleting={true}
              mode="popup" /> {/* 'batch' | 'cell' | 'form' | 'popup' */}
            <Paging defaultPageSize={10} />
            <Pager showPageSizeSelector={true} showInfo={true} />
            <FilterRow visible={true} />
            <Column dataField={'name'} />
            <Column dataField={'image'} />
            <MasterDetail enabled={true} component={subCategories} />
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );


  function subCategories(props) {

    console.log(props);
    return (
      <DataGrid
        dataSource={props.data.data.subCategories}
        key={'oid'} />
    )
  }



}