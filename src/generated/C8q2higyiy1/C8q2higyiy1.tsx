
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-8q2higyiy1',
  shadow: true,
})
export class C8q2higyiy1 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  