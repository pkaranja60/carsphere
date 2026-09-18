// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────
import { MdManageSearch } from "react-icons/md";
import {
  Autocomplete,
  AutocompleteItem,
} from "@/shared/components/ui/autocomplete";
import { Button } from "@/shared/components/ui/button";
import { Select, SelectItem } from "@/shared/components/ui/select";
import {
  Tab,
  TabList,
  TabListContainer,
  Tabs,
} from "@/shared/components/ui/tabs";

export function OmniSearch() {
  return (
    <section className="relative z-20 mx-auto -mt-10 w-full max-w-345 px-margin-mobile md:-mt-14 md:px-margin">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-xl">
        <div className="flex flex-col gap-space-md">
          <div className="flex flex-wrap items-center justify-between gap-space-xs border-surface-container border-b pb-space-xs">
            <Tabs defaultSelectedKey="all">
              <TabListContainer>
                <TabList aria-label="Inventory Types">
                  <Tab id="all">All Inventory (482)</Tab>
                  <Tab id="cpo">Certified Pre-Owned (318)</Tab>
                  <Tab id="fleet">Executive Fleet (64)</Tab>
                  <Tab id="ev">Electric & Hybrid (82)</Tab>
                </TabList>
              </TabListContainer>
            </Tabs>
            <div className="hidden items-center gap-space-xs font-label-sm text-on-surface-variant lg:flex">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-tertiary" />
              <span className="font-medium">Live Stock Updated 8 mins ago</span>
            </div>
          </div>
          <div className="grid grid-cols-1 items-end gap-space-sm sm:grid-cols-2 md:gap-space-md lg:grid-cols-5">
            <div className="flex flex-col justify-end">
              <Autocomplete
                label="Make & Model"
                placeholder="e.g. Porsche, BMW, Genesis..."
              >
                <AutocompleteItem id="porsche" textValue="Porsche">
                  Porsche
                </AutocompleteItem>
                <AutocompleteItem id="bmw" textValue="BMW">
                  BMW
                </AutocompleteItem>
                <AutocompleteItem id="genesis" textValue="Genesis">
                  Genesis
                </AutocompleteItem>
                <AutocompleteItem id="mercedes" textValue="Mercedes-Benz">
                  Mercedes-Benz
                </AutocompleteItem>
                <AutocompleteItem id="audi" textValue="Audi">
                  Audi
                </AutocompleteItem>
                <AutocompleteItem id="lexus" textValue="Lexus">
                  Lexus
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div className="flex flex-col justify-end">
              <Select label="Body Architecture" placeholder="All Body Styles">
                <SelectItem id="all" textValue="All Body Styles">
                  All Body Styles
                </SelectItem>
                <SelectItem id="suv" textValue="Touring & Luxury SUV">
                  Touring & Luxury SUV
                </SelectItem>
                <SelectItem id="sedan" textValue="Executive Sedan">
                  Executive Sedan
                </SelectItem>
                <SelectItem id="coupe" textValue="Grand Tourer & Coupe">
                  Grand Tourer & Coupe
                </SelectItem>
                <SelectItem id="wagon" textValue="Estate & Sport Wagon">
                  Estate & Sport Wagon
                </SelectItem>
              </Select>
            </div>
            <div className="flex flex-col justify-end">
              <Select label="Target Budget" placeholder="All Prices">
                <SelectItem id="all" textValue="All Prices">
                  All Prices
                </SelectItem>
                <SelectItem id="under-45k" textValue="Under $45,000">
                  Under $45,000
                </SelectItem>
                <SelectItem id="45-75k" textValue="$45,000 - $75,000">
                  $45,000 - $75,000
                </SelectItem>
                <SelectItem id="75-150k" textValue="$75,000 - $150,000">
                  $75,000 - $150,000
                </SelectItem>
                <SelectItem id="150k" textValue="$150,000+">
                  $150,000+
                </SelectItem>
              </Select>
            </div>
            <div className="flex flex-col justify-end">
              <Select label="Provenance" placeholder="Any Condition">
                <SelectItem id="all" textValue="Any Condition">
                  Any Condition
                </SelectItem>
                <SelectItem id="cpo" textValue="Certified Pre-Owned">
                  Certified Pre-Owned
                </SelectItem>
                <SelectItem id="1owner" textValue="1-Owner Verified">
                  1-Owner Verified
                </SelectItem>
                <SelectItem id="new" textValue="Arrived This Week">
                  Arrived This Week
                </SelectItem>
                <SelectItem id="low" textValue="Under 15,000 Miles">
                  Under 15,000 Miles
                </SelectItem>
              </Select>
            </div>
            <div>
              <Button
                className="gap-space-xs"
                fullWidth
                size="lg"
                variant="primary"
              >
                <MdManageSearch className="text-lg" />
                <span>Search 482 Cars</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
