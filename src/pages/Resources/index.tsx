import { useCallback, useEffect, useState } from 'react';
import CustomAutocomplete from '../../components/Autocomplete';
import './Resources.scss';
import API, { extractDataForTable, tableColumnNames } from '../../api/api';
import CustomTable from '../../components/Table';

export default function Resources() {
  const [resources, setResources] = useState<string[]>([]);
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [tableData, setTableData] = useState<Array<any>>([[]]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    (async () => {
      const results = await API.fetchResources();
      setResources(results);
    })();
  }, []);
  
  useEffect(() => {
    (async () => {
      if (selectedResource.length) {
        setIsLoading(true);
        const data = await API.fetchResourcesByName(selectedResource);
        setTableData(extractDataForTable(data));
        setIsLoading(false);
      }
    })();
  }, [selectedResource]);

  const handleSelectResource = useCallback((term: string) => {
    setSelectedResource(term);
  }, []);
  
  return (
    <div className="dataPanel">
      <div className="dataPanelInner">
        <CustomAutocomplete
          title="Resources"
          onSelect={handleSelectResource}
          items={resources}
          placeHolder="Search for Resources"
        />
        <CustomTable
          columnNames={tableColumnNames}
          rowData={tableData}
          loading={isLoading}
        />
      </div>
    </div>
  );
}