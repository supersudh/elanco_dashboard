import { Table, Spinner } from 'evergreen-ui';

import './Table.scss';

interface IProps {
  columnNames: string[];
  rowData: Array<Array<any>>;
  loading: boolean;
}

export default function CustomTable({
  columnNames,
  rowData,
  loading
}: IProps) {
  return (
    <Table.Body className="custom-table-body">
      <Table.Head className="custom-table-header">
        {
          columnNames.map((c, i) => (
            <Table.TextCell
              key={`column-${c}`}
            >
              {c}
            </Table.TextCell>
          ))
        }
      </Table.Head>
      <Table.Body className="custom-table-body-inner">
        {
          loading ? (
            <div className="center"><Spinner /></div>
          ) :
            (
              <>
                {
                  rowData[0].length > 0 && rowData.map((thisRow: any[], i) => (
                    <Table.Row
                      key={`row-${i}`}
                    >
                      {
                        thisRow.map((thisRowItem: number | string, i) => (
                          <Table.TextCell
                            key={`row-${i}-cell`}
                          >
                            {thisRowItem}
                          </Table.TextCell>
                        ))
                      }
                    </Table.Row>
                  ))

                }
                {
                  rowData[0].length === 0 && <div>No Results, Search to get started</div>
                }
              </>
            )
        }
      </Table.Body>
    </Table.Body>);
};
