'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface JobFiltersProps {
  onFilterChange: (type: string, value: string) => void
}

export function JobFilters({ onFilterChange }: JobFiltersProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Filters:</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <Select onValueChange={(value) => onFilterChange('department', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
            <SelectItem value="management">Management</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange('location', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="turkiye">Türkiye</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange('type', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Employment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

