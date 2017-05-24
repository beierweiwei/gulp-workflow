### test
*   类型    RegExp对象方法.
*   返回值  blooean
*   用法：
    RegExpObj.test(string)
*   说明：

### match
*   类型    stringObj对象方法. 
*   返回值 存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。
*   用法：

        stringObject.match(searchvalue)
        stringObject.match(regexp)

*   说明

### search
*   类型：    stringObj对象方法
*   返回值：  stringObject 中第一个与 regexp 相匹配的子串的起始位置。如果没有找到任何匹配的子串，则返回 -1。
*   用法：

        stringObject.search(regexp)

*   说明：search() 方法不执行全局匹配，它将忽略标志 g。它同时忽略 regexp 的 lastIndex 属性，并且总是从字符串的开始进行检索，这意味着它总是返回 stringObject 的第一个匹配的位置。
    
### exec

*   类型：    RegExpObject对象方法
*   返回值：  返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。相匹配的子串的起始位置。如果没有找到任何匹配的子串，则返回 -1。
*   用法：    
        RegExpObject.exec(string)
        
*   说明：exec() 方法的功能非常强大，它是一个通用的方法，而且使用起来也比 test() 方法以及支持正则表达式的 String 对象的方法更为复杂。
如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。此数组的第 0 个元素是与正则表达式相匹配的文本，第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。我们可以看得出，在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。
但是，当 RegExpObject 是一个全局正则表达式时，exec() 的行为就稍微复杂一些。它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。