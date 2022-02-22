#!/usr/bin/python
## encoding=utf-8

"""
@Author  :  Don
@Date    :  2021/11/03 20:34
@Desc    :
"""

import copy
import itertools
from sys import stdout

from loguru import logger


def parewise(option):
    """pairwise算法"""
    cp = []  # 笛卡尔积
    s = []  # 两两拆分
    print(str(tuple(option)))
    for x in eval('itertools.product' + str(tuple(option))):
        print(x)
        cp.append(x)
        s.append([i for i in itertools.combinations(x, 2)])
    logger.info('笛卡尔积:%s' % len(cp))
    print(s)
    print(cp)
    del_row = []
    s2 = copy.deepcopy(s)
    print(s2)
    for i in range(len(s)):  # 对每行用例进行匹配
        # if (i % 100) == 0 or i == len(s) - 1:
        #     bar(int(100 * i / (len(s) - 1)))
        t = 0
        for j in range(len(s[i])):  # 对每行用例的两两拆分进行判断，是否出现在其他行
            flag = False
            for i2 in [x for x in range(len(s2)) if s2[x] != s[i]]:  # 找同一列
                if s[i][j] == s2[i2][j]:
                    t = t + 1
                    flag = True
                    break
            if not flag:  # 同一列没找到，不用找剩余列了
                break
        if t == len(s[i]):
            del_row.append(i)
            s2.remove(s[i])
    res = [cp[i] for i in range(len(cp)) if i not in del_row]
    logger.info('过滤后:%s' % len(res))
    return res


# def bar(i):
#     """进度条"""
#     c = int(i / 10)
#     jd = '\r %2d%% [%s%s]'
#     a = '■' * c
#     b = '□' * (10 - c)
#     msg = jd % (i, a, b)
#     stdout.write(msg)
#     stdout.flush()


if __name__ == '__main__':
    pl = [['M', 'O', 'P'], ['W', 'L', 'I'], ['C', 'E']]
    a = parewise(pl)
    print()
    for i in a:
        print(i)