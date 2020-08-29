def persistence(n):
    s = 0
    i = 1
    temp = 1
    t = 1
    
    while n > 9:
        temp = str(n)
        for j in range(len(temp)):
            t *= int(temp[j])
        s += 1
        n = t
        t = 1
    return s