import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobFiltersProps {
  onFilterChange: (type: string, value: string) => void;
}

export function JobFilters({ onFilterChange }: JobFiltersProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Filters:</h2>
      <div className="grid md:grid-cols-3 space-y-3 md:space-y-0 md:space-x-2">
        <Select onValueChange={(value) => onFilterChange("department", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="link 1">Link 1</SelectItem>
            <SelectItem value="link 2">Link 2</SelectItem>
            <SelectItem value="link 3">Link 3</SelectItem>
            {/* <SelectItem value="management">Management</SelectItem> */}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange("location", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="link 2">Link 2</SelectItem>
            <SelectItem value="link 1">Link 1</SelectItem>
            <SelectItem value="link 3">Link 3</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange("type", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Employment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="devops engineer">DevOps Engineer</SelectItem>
            <SelectItem value="frontend engineer">Frontend Engineer</SelectItem>
            <SelectItem value="content manager">Content Manager</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
