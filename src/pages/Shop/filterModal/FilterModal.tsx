import "./FilterModal.modules.css";
import closeCircle from "../../../assets/icons/close-circle.svg";
import { ButtonCheckbox } from "../../../components/buttonCheckBox/ButtonCheckBox";
import { fetchFilterOptions, IFilterOptions } from "../../../api/fetchFilterOptions";
import { useQuery } from "@tanstack/react-query";

interface IFilterModal {
    isOpen: boolean;
    onClose: () => void;
    handleCategoriesFilter: (label: string, checked: boolean) => void;
    selectedCategories: string[];
}

export function FilterModal({
    isOpen,
    onClose,
    handleCategoriesFilter,
    selectedCategories,
}: IFilterModal) {
    const { data } = useQuery<IFilterOptions>({
        queryKey: ["filterOptions"],
        queryFn: fetchFilterOptions,
        staleTime: 1000 * 60 * 60, // Cache 60 minutos
    });

    if (!isOpen) return null;

    return (
        <div className="filterModalContainer" onClick={onClose}>
            <div className="filterModalContent" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="filterModalCloseButton">
                    <img src={closeCircle} />
                </button>

                <p>Additional Filters</p>

                <div className="difficultyContainer">
                    <p>Difficulty</p>
                    <div>
                        {["Beginner", "Intermediate", "Advanced"].map((difficulty) => (
                            <ButtonCheckbox
                                key={difficulty}
                                label={difficulty}
                                onToggle={handleCategoriesFilter}
                                checked={selectedCategories.includes(difficulty.toLowerCase())}
                            />
                        ))}
                    </div>
                </div>

                <div className="categoriesContainer">
                    <p>Categories</p>
                    <div>
                        {data?.filterOptions.map((option) => (
                            <ButtonCheckbox
                                label={option}
                                onToggle={handleCategoriesFilter}
                                key={option + option.indexOf}
                                checked={selectedCategories.includes(option.toLowerCase())}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
