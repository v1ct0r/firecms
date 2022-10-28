import { Entity, ExportConfig, Properties, ResolvedEntitySchema } from "../../models";
interface Header {
    key: string;
    label: string;
}
export declare function downloadCSV<M>(data: Entity<M>[], additionalData: Record<string, any>[] | undefined, schema: ResolvedEntitySchema<M>, path: string, exportConfig: ExportConfig | undefined): void;
export declare function getExportableData(data: any[], additionalData: Record<string, any>[] | undefined, properties: Properties, headers: Header[]): any[][];
export declare function downloadBlob(content: BlobPart[], filename: string, contentType: string): void;
export {};
