import { useState, useEffect, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

interface Props {
  title: string;
  options: any[];
  setSelected: (id: number) => void;
  selectedOptionName?: string;
  srchPlaceholder?: string;
}

const SDropdown: React.FC<Props> = ({
  title,
  options,
  setSelected,
  selectedOptionName,
  srchPlaceholder,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [OtherValue, setOtherValue] = useState('');
  const [open, setOpen] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const menuRef: any = useRef();
  const otherValueRef: any = useRef();

  const selectOption = (option: any) => {
    if (option.name.toLowerCase() === 'other') {
      setIsOther(true);
      otherValueRef.current && otherValueRef.current.focus();
    } else {
      setOpen(false);
      setSelected(option);
    }
    setSearchValue('');
  };

  const setOther = (e: any) => {
    if (e.keyCode === 13) {
      const value = OtherValue;
      const otherOption = { ...options[options.length - 1], ...{ value } };
      setSelected(otherOption);
      setSearchValue('');
      setOpen(false);
      // console.log(otherOption);
    }
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        setSearchValue('');
        setIsOther(false);
        setOtherValue('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [menuRef]);

  return (
    <div className="w-72 font-medium h-10 relative my-2" ref={menuRef}>
      <div
        className="bg-white w-full p-2 flex items-center justify-between rounded"
        onClick={() => setOpen(!open)}
      >
        {selectedOptionName
          ? selectedOptionName.length > 20
            ? selectedOptionName.substring(0, 20) + '...'
            : selectedOptionName
          : title}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto absolute left-0 right-0 z-40 ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex items-center justify-between px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="placeholder:text-gray-700 " />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            placeholder={`${srchPlaceholder || 'Search'}`}
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {options.map((option) => (
          <li
            key={option.id}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white 
                            ${
                              option.name.toLowerCase().startsWith(searchValue)
                                ? 'block'
                                : 'hidden'
                            } 
                            ${
                              option.name === selectedOptionName
                                ? 'bg-sky-600 text-white'
                                : ''
                            }
                          `}
            onClick={() => {
              selectOption(option);
            }}
          >
            {option.value ? option.value : option.name}
          </li>
        ))}
        {isOther && (
          <div className="flex items-center justify-between px-2 sticky top-0 bg-white">
            <AiOutlinePlus size={18} className="placeholder:text-gray-700 " />
            <input
              ref={otherValueRef}
              type="text"
              value={OtherValue}
              onChange={(e) => setOtherValue(e.target.value.toLowerCase())}
              onKeyUp={(e) => setOther(e)}
              placeholder="Add option value"
              className="placeholder:text-gray-700 p-2 outline-none"
            />
          </div>
        )}
      </ul>
    </div>
  );
};

export default SDropdown;
