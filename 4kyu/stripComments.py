def solution(string,markers):
    c = '\xc2'
    res = ""
    s = string.split('\n')
    for i in s:
        position = -1
        for j in range(len(i)):
            if i[j] in markers:
                position = j
                break
            if i[j] == c:
                position = j
                break
        if position != -1:
            i = i[0:position]
        res += i.rstrip() + "\n"
    return res[0:-1]